import clsx from 'clsx'

export const FilterChips = () => {
    return (
        <button
            value="Misc"
            className={clsx('px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm', {
                'border-blue-700 bg-blue-100 hover:bg-blue-200': getCriteria('category') === 'Any'
            })}
            onClick={() => onCategoryFilter('Any')}
        >
            Без разницы
        </button>
    )
}