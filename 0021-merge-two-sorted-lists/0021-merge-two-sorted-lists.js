/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Create a new ListNode object named `dummy` with a value of -Infinity and a next property set to null.
    let dummy = new ListNode(-Infinity)
    // Create a variable named `prev` and initialize it to `dummy`.
    let prev = dummy 
    // Enter a while loop that will continue until either `list1` or `list2` is exhausted.
    while (list1 && list2){
        // If the value of the current node in `list1` is less than or equal to the value of the current node in `list2`...
        if(list1.val <= list2.val){
            // Set the `next` property of `prev` to `list1`.
            prev.next = list1
            // Update `prev` to point to the current node in `list1`.
            prev = list1
            // Update `list1` to point to the next node in `list1`.
            list1 = list1.next
        } else {
            // Otherwise, set the `next` property of `prev` to `list2`.
            prev.next = list2
            // Update `prev` to point to the current node in `list2`.
            prev = list2
            // Update `list2` to point to the next node in `list2`.
            list2 = list2.next
        }
    }
     
    // If `list1` is empty, append the remaining nodes in `list2` to the merged list.
    if(!list1) prev.next = list2
    // If `list2` is empty, append the remaining nodes in `list1` to the merged list.
    if(!list2) prev.next = list1

    // Return the `next` property of the `dummy` node, which is the head of the merged list.
    return dummy.next
};