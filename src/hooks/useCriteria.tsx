import {useSearchParams} from '@remix-run/react'

const useCriteria = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const getCriteria = (name: string) => {
        return searchParams.get(name)
    }

    const setCriteria = (name: string, value: string) => {
        setSearchParams((prevSearchParams) => {
            const newSearchParams = new URLSearchParams(prevSearchParams)
            newSearchParams.set(name, value)
            return newSearchParams
        }, {
            replace: true,
        })
    }

    const resetCriteria = (name: string) => {
        setSearchParams((prevSearchParams) => {
            const newSearchParams = new URLSearchParams(prevSearchParams)
            newSearchParams.delete(name)
            return newSearchParams
        }, {
            replace: true,
        })
    }

    return { getCriteria, setCriteria, resetCriteria }
}

export default useCriteria