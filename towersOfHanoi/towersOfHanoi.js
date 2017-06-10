/* Towers of Hanoi: In the classic problem of the Towers of Hanoi, you have 3 towers and N disks
 * of different sizes which can slide onto any tower. The puzzle starts with disks sorted in
 * ascending order of size from top to bottom (Le., each disk sits on top of an even larger one).
 * You have the following constraints:
 * (1) Only one disk can be moved at a time.
 * (2) A disk is slid off the top of one tower onto another tower.
 * (3) A disk cannot be placed on top of a smaller disk.
 * Write a program to move the disks from the first tower to the last using stacks.
 */

const towersOfHanoi = (n, source, target, spare) => {
  if (n > 0) {
    towersOfHanoi(n-1, source, spare, target);
    target.push(source.pop());
    console.log(` SOURCE: ${source}\n SPARE:${spare}\n TARGET ${target}\n`);

    towersOfHanoi(n-1, spare, target, source);
  }
}

const A = [5, 4, 3, 2, 1]
const B = []
const C = []

towersOfHanoi(A.length, A, B, C);