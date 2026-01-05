// https://leetcode.com/problems/binary-tree-paths/description/

/**
 * Definition for a binary tree node.
 * */
class TreeNode {
  // 속성 (이 노드가 가진 데이터)
  val: number; // 숫자 값
  left: TreeNode | null; // 왼쪽 자식 (있거나 없거나)
  right: TreeNode | null; // 오른쪽 자식 (있거나 없거나)

  // 생성자 (새 노드 만들 때 실행되는 함수)
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// 트리 노드 예제
// const tree = new TreeNode(1,
//     new TreeNode(2,
//         null,
//         new TreeNode(5)
//     ),
//     new TreeNode(3)
// );
//       1
//      / \
//     2   3
//      \
//       5

// 이진 트리의 root가 주어졌을 때, root에서 leaf로 가는 모든 경로를 출력하라
function binaryTreePaths(root: TreeNode | null): string[] {}
