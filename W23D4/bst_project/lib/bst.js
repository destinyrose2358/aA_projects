class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    insert(val, root = this.root) {
        if (!this.root) {
           this.root = new TreeNode(val);
        } else {
            if (Math.sign(root.val - val) === 1) {
                if (!root.left) {
                    root.left = new TreeNode(val);
                } else {
                    this.insert(val, root.left);
                }
            } else {
                if (!root.right) {
                    root.right = new TreeNode(val);
                } else {
                    this.insert(val, root.right);
                }
            }
        }
    }

    searchRecur(val, root = this.root) {
        if (!root) return false;
        switch (Math.sign(root.val - val)) {
            case -1:
                return this.searchRecur(val, root.right);
            case 0:
                return true;
            case 1:
                return this.searchRecur(val, root.left);            
        } 
    }

    searchIter(val) {
        let root = this.root;
        while (root) {
            switch (Math.sign(root.val - val)) {
                case -1:
                    root = root.right;
                    break;
                case 0:
                    return true;
                case 1:
                    root = root.left;
                    break;
            }
        }
        return false;
    }
}

module.exports = {
    TreeNode,
    BST
};