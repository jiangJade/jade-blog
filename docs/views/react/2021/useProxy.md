---
title: useMemo and proxy
date: 2019-12-22
tags:
  - react
categories:
  - react
---

```js
    import { useMemo, useState } from 'react';

    type ControllerBaseOptions = {
        $changeHandler: () => void;
    };

    export class ControllerBase<T extends any = any> {
        data!: T;

        $changeHandler!: () => void;

        $innerData: any = {};

        // eslint-disable-next-line
        __init(options: ControllerBaseOptions) {
            this.$innerData = this.data || {};
            this.$changeHandler = options.$changeHandler || function names() {};

            const innerData = this.$innerData;
            const { $changeHandler } = this;
            this.data = new Proxy(this.$innerData, {
                set(target, prop, value) {
                    innerData[prop] = value;
                    $changeHandler();
                    return true;
                },
                get(target, prop) {
                    return innerData[prop];
                },
            });
            return this;
        }
    }

    export function useController<T extends ControllerBase>(Response: {
        new (): { __init(options: ControllerBaseOptions): any };
        }): T {
        const [, setRefresh] = useState({});
        const res = useMemo(() => {
            // eslint-disable-next-line
            return new Response().__init({
                $changeHandler() {
                    setRefresh({});
                },
            });
        }, []);
        return res;
    }
```
