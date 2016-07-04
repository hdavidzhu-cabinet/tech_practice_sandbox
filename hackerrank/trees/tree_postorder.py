# https://www.hackerrank.com/challenges/tree-postorder-traversal

"""
Node is defined as
self.left (the left child of the node)
self.right (the right child of the node)
self.data (the value of the node)
"""

def preOrder(list, node):
    if node is None:
        return

    list.append(node.data)
    preOrder(list, node.right)
    preOrder(list, node.left)
    return

def postOrder(root):
    list = []
    preOrder(list, root)

    while len(list) > 0:
        print(str(list.pop()), end=' ')
