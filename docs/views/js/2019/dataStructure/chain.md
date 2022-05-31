---
title: 链表问题
date: 2019-7-12
tags:
 - js
categories:
 - js
---

## 1 两两交换链表中的节点-24

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例:

```
给定 1->2->3->4, 你应该返回 2->1->4->3.
function ListNode(val) {
    this.val = val;
    this.next = null;
}
    let heads = new ListNode(1);
    let head2 = new ListNode(2);
    let head3 = new ListNode(3);
    let head4 = new ListNode(4);
    heads.next = head2;
    head2.next = head3;
    head3.next = head4;
    var swapPairs = function (head) {
        
        if (head == null || head.next == null) {
            return head;
        }
        // 获得第 2 个节点
        let next = head.next;
        // next.next = head.next.next
        // 第1个节点指向第 3 个节点，并从第3个节点开始递归
        head.next = swapPairs(next.next);
        // 第2个节点指向第 1 个节点
        next.next = head;
        // 或者 [head.next,next.next] = [swapPairs(next.next),head]
        return next;
    };
console.log(333, swapPairs(heads));
```
