

## Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

```ruby
# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def merge_two_lists(l1, l2)
    
    dummy = ListNode.new(0)
    l3 = dummy
    
    while(!l1.nil? && !l2.nil?)
        if l1.val <= l2.val
            l3.next = l1
            l1 = l1.next
        else 
            l3.next = l2
            l2 = l2.next
        end
        
        l3 = l3.next
    end
    
    if(l1.nil?)
        l3.next = l2
    end
    
    if(l2.nil?)
        l3.next = l1
    end
    
    dummy.next
    
    
end
```