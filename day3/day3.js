// (list,arr) , object
// int[] arr = new int[123];
// List<Integer> list = new ArrayList<>();
const list = [];
// arr[0] = 1;
// list.add(1);
for (let index = 1; index <= 50; index++) {
  const num =
    (index + "").includes("3") ||
    (index + "").includes("6") ||
    (index + "").includes("9")
      ? "짝"
      : index;
  //   if ((index + "").includes("3")) num = "짝";
  //   if ((index + "").includes("6")) num = "짝";
  //   if ((index + "").includes("9")) num = "짝";
  //   const num = index%3==0 ? "짝" : index;
  list.push(num);
  //   if (index % 3 == 0) list.push("짝");
  //   else list.push(index);
}
//  369 1, 2, "짝", 4, 5, 짝 10
console.log(list);
