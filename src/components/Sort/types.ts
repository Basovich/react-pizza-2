export type DocumentClickType = MouseEvent & {
    path: Node[];
}

export type SortListType = {
    sorts: string[],
    handleOnClickSort: (name: string) => void,
    sortType: string
}