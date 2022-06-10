const filterByGroup = (student, groupFilter) =>
  groupFilter === "all"
    ? true
    : student.groups.map((group) => group.name).includes(groupFilter);

const filterByStatus = (student, statusFilter) =>
  student.status === statusFilter || statusFilter === "all";

const filterBySearch = (student, searchInput) =>
  (student.firstName + " " + student.lastName)
    .toLowerCase()
    .includes(searchInput) ||
  student.dateOfBirth.includes(searchInput) ||
  student.groups
    .map((group) => group.name.toLowerCase())
    .includes(searchInput) ||
  student.ref.toLowerCase().includes(searchInput) ||
  student.bsn.includes(searchInput);

export { filterByGroup, filterBySearch, filterByStatus };
