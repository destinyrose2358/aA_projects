class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insertRecur(word, root = this.root) {
        const char = word[0];
        if (!(char in root.children)) {
            root.children[char] = new Node();
        }
        if (word.length === 1) {
            root.children[char].isTerminal = true;
        } else {
            this.insertRecur(word.slice(1), root.children[char]);
        }
    }

    insertIter(word) {
        let root = this.root;
        word = word.slice(0);
        while (word.length > 0) {
            let char = word[0];
            if (!(char in root.children)) root.children[char] = new Node();
            word = word.slice(1);
            root = root.children[char];
        }
        root.isTerminal = true;
    }

    searchRecur(word, root = this.root) {
        let char = word[0];
        if (!root.children[char]) return false;
        if (word.length === 1) {
            return root.children[char].isTerminal;
        }
        return this.searchRecur(word.slice(1), root.children[char]);
    }

    searchIter(word) {
        word = word.slice(0);
        let root = this.root;
        for (let charIdx = 0; charIdx < word.length; charIdx++ ) {
            let char = word[charIdx];
            root = root.children[char];
            if (!root) return false;
        }
        return root.isTerminal;
    }

    wordsWithPrefix(prefix) {
        //find the node matching the prefix
        let prefixNode = this.root;
        for (let charIdx = 0; charIdx < prefix.length; charIdx++) {
            let char = prefix[charIdx];
            prefixNode = prefixNode.children[char];
            if (!prefixNode) return [];
        }
        return this.dfsWordSearch(prefix, prefixNode);
    }

    dfsWordSearch(prefix, root) {
        let words = [];
        if (root.isTerminal) words.push(prefix);
        Object.entries(root.children).forEach(child => {
            words.push(...this.dfsWordSearch(prefix + child[0], child[1]));
        });
        return words;
    }
}

module.exports = {
    Node,
    Trie
};