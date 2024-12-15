// Trie.ts
export class TrieNode {
    children: Record<string, TrieNode> = {};
    endOfWord: boolean = false;
}

export class Trie {
    root: TrieNode = new TrieNode();

    insert(word: string): void {
        if (typeof word !== 'string' || word === undefined) return;
        word = word.toLowerCase();

        // Insert all substrings of the word
        for (let i = 0; i < word.length; i++) {
            let current = this.root;
            for (let j = i; j < word.length; j++) {
                const char = word[j];
                if (!current.children[char]) {
                    current.children[char] = new TrieNode();
                }
                current = current.children[char];
            }
            current.endOfWord = true;
        }
    }

    search(prefix: string): boolean {
        let current = this.root;
        prefix = prefix.toLowerCase();
        for (const char of prefix) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return true; // Changed to reflect accurate Trie usage
    }
}
