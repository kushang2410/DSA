class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.tree = new Array(4 * this.n).fill(0);
        this.arr = arr;
        this.build(0, 0, this.n - 1);
    }

    build(node, start, end) {
        if (start === end) {
            this.tree[node] = this.arr[start];
        } else {
            const mid = Math.floor((start + end) / 2);
            this.build(2 * node + 1, start, mid);
            this.build(2 * node + 2, mid + 1, end);
            this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
        }
    }

    update(index, value) {
        this._update(0, 0, this.n - 1, index, value);
    }

    _update(node, start, end, index, value) {
        if (start === end) {
            this.arr[index] = value;
            this.tree[node] = value;
        } else {
            const mid = Math.floor((start + end) / 2);
            if (start <= index && index <= mid) {
                this._update(2 * node + 1, start, mid, index, value);
            } else {
                this._update(2 * node + 2, mid + 1, end, index, value);
            }
            this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
        }
    }

    query(left, right) {
        return this._query(0, 0, this.n - 1, left, right);
    }

    _query(node, start, end, left, right) {
        if (right < start || end < left) {
            return 0;
        }
        if (left <= start && end <= right) {
            return this.tree[node];
        }
        const mid = Math.floor((start + end) / 2);
        const p1 = this._query(2 * node + 1, start, mid, left, right);
        const p2 = this._query(2 * node + 2, mid + 1, end, left, right);
        return p1 + p2;
    }
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11];
const segTree = new SegmentTree(arr);

console.log(segTree.query(1, 3)); 

segTree.update(2, 10);

console.log(segTree.query(1, 3)); 