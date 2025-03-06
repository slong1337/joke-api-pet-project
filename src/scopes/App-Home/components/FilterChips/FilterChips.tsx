import clsx from 'clsx'
import useCriteria from '@/hooks/useCriteria'


export type FilterChipsProps = {
    placeholder: string
    criteriaValue: string
    criteriaKey: string
    onClick: () => void
    className?: string
    isActive?: boolean
}

export const FilterChips = (props: FilterChipsProps) => {
    const { placeholder, criteriaValue, onClick, className, criteriaKey, isActive } = props

    const { getCriteria } = useCriteria()


    return (
        <button
            className={clsx(className,'px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm', {
                'border-blue-700 bg-blue-100 hover:!bg-blue-200': getCriteria(criteriaKey) === criteriaValue || isActive
            })}
            onClick={onClick}
        >
            {placeholder}
        </button>
    )
}
