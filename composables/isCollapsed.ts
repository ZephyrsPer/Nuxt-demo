export const useIsCollapsed = () => {
    return useState('isCollapsed', () => false)
}


export const useChangeIsCollapsed = () => {
    let isCollapsed = useIsCollapsed()
    isCollapsed.value = !isCollapsed.value
}
