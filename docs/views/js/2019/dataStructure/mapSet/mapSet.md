---
title: 利用 Map 和 Set 处理查找表问题
date: 2019-6-23
tags:
 - js
categories:
 - js
---
## 查找表问题
### 1 两个数组的交集 II-350

  给定两个数组，编写一个函数来计算它们的交集。

```
示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
示例 2:

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]
```

#### 解题思路
为两个数组分别建立 map，用来存储 num -> count 的键值对，统计每个数字出现的数量。

然后对其中一个 map 进行遍历，查看这个数字在两个数组中分别出现的数量，取出现的最小的那个数量（比如数组 1 中出现了 1 次，数组 2 中出现了 2 次，那么交集应该取 1 次），push 到结果数组中即可。
```
has表
const intersect = (nums1, nums2) => {
    let obj = {}; // 用对象保存nums1的数据
    const result = [];
    // 将数组转换成has表
    for(let item1 of nums1) {
        if(obj[item1]) {
            obj[item1] +=1;
        }else {
            obj[item1] = 1;
        }
    }
    for(let item2 of nums2) {
        let val = obj[item2];
        if(val) {
            result.push(item2);
            obj[item2]--;
        }
    }
    return result;
}


```

```
双指针
function doublePointer(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a,b) => a - b); // 先排序 让相同的元素相邻 好查找
    let p1 = 0, p2 = 0;
    const result = [];
    while(p1 < nums1.length && p2 < nums2.length) {
        if(nums1[p1] < nums2[p2]) {
            p1++;
        }else if(nums1[p1] > nums2[p2]) {
            p2++;
        }else {
            result.push(nums1[p1]);
            p1++;
            p2++;
        }
    }
}
```

### 2 最接近的三数之和-16

给定一个包括  n 个整数的数组  nums  和 一个目标值  target。找出  nums  中的三个整数，使得它们的和与  target  最接近。返回这三个数的和。假定每组输入只存在唯一答案。

```
输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
```
:::tip
提示：

3 <= nums.length <= 10^3-10^3 <= nums[i] <= 10^3-10^4 <= target <= 10^4
:::

```
const intersect = (nums, target) => {
    nums.sort((a, b) => a - b);
    let result = nums[0] + nums[1] + nums[nums.length - 1];
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum == target) {
                return sum;
            } else if (sum > target) {
                if (sum - target < Math.abs(result - target)) 
                result = sum;
                right--;
            } else {
                if (target - sum < Math.abs(result - target)) result = sum;
                left++;
            }
        }
    }
    return result;
};

```

### 3 滑动窗口问题
无重复字符的最长子串-3

给定一个字符串，请你找出其中不含有重复字符的   最长子串   的长度。

示例  1:

```
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

示例  2:
```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

示例  3:
```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

```
 var lengthOfLongestSubstring = function (s) {
    
    let n = s.length, max = 0, res = -1, set = new Set();
    for (let i = 0; i < n; ++i) {
        if(i != 0) {
            set.delete(s.charAt(i - 1))
        }
        while(res + 1 < n && !set.has(s.charAt(res + 1))) {
            set.add(s.charAt(res + 1));
            ++res;
        }
        max = Math.max(max, res - i + 1);

    }
    
    return max;
}
lengthOfLongestSubstring("abcabcbb")
```
