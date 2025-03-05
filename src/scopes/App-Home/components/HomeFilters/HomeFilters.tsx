import useCriteria from '@/hooks/useCriteria'
import clsx from 'clsx'
import { useEffect, useRef } from "react"
import { CloseIcon } from '@/components/icons/CloseIcon'
import { FilterChips } from '@/scopes/App-Home/components/FilterChips/FilterChips'
import { SearchIcon } from '@/components/icons/SearchIcon'
import { useNavigate } from '@remix-run/react'
import { useSearchParams } from 'react-router-dom'

export const HomeFilters = () => {
    const { setCriteria, resetCriteria, getCriteria } = useCriteria()
    const [searchParams] = useSearchParams()

    const navigate = useNavigate()

    //Задаем стартовое значения searchParams: category=Any и type=any
    useEffect(() => {
        console.log('render')
        const newSearchParams = new URLSearchParams(searchParams)
        let updated = false

        if (!newSearchParams.has('category')) {
            newSearchParams.set('category', 'Any')
            updated = true
        }
        if (!newSearchParams.has('type')) {
            newSearchParams.set('type', 'any')
            updated = true
        }

        if (updated) {
            navigate(`?${newSearchParams.toString()}`, { replace: true })
        }
    }, [navigate])

    const onTypeFilter = (value: string) => {
        if (value === '') {
            resetCriteria('type')
        } else {
            setCriteria('type', value)
        }
    }

    const onCategoryFilter = (value: string) => {
        if (value === '') {
            resetCriteria('category')
        } else {
            setCriteria('category', value)
        }
    }

    const onSearchFilter = (value: string) => {
        if (value) {
            setCriteria('contains', value)
        } else {
            resetCriteria('contains')
        }
    }

    const searchRef = useRef<HTMLInputElement | null>(null)
    
    const handleInputChange = () => {
        const value = searchRef.current?.value || getCriteria('contains') || ''

        onSearchFilter(value)
    }

    const clearInput = () => {
        if (getCriteria('contains')) {
            resetCriteria('contains')
            if (searchRef.current) {
                searchRef.current.value = ''
            }
        }
    }

    return (
        <>
            <div className="border rounded-xl px-4 py-2 mt-6 max-w-3xl mx-2 md:mx-auto ">
                <h1 className="text-3xl font-bold">Конфигуратор шутки</h1>

                <div className="flex flex-col gap-6">

                    {/* Выбор категории */}
                    <div className="flex flex-wrap items-center gap-4">
                        <p className="font-medium pt-4">Выберите категорию / категории:</p>

                        <div className="category-container flex flex-wrap gap-2">
                            <FilterChips 
                                placeholder="Без разницы" 
                                criteriaValue="Any" 
                                onClick={() => onCategoryFilter("Any")} 
                                criteriaKey="category"
                            />
                            <FilterChips 
                                placeholder="Программирование" 
                                criteriaValue="Programming" 
                                onClick={() => onCategoryFilter("Programming")} 
                                criteriaKey="category"
                            />
                            <FilterChips 
                                placeholder="Разное" 
                                criteriaValue="Miscellaneous" 
                                onClick={() => onCategoryFilter("Miscellaneous")} 
                                criteriaKey="category"
                            />
                            <FilterChips 
                                placeholder="Чёрный юмор" 
                                criteriaValue="Dark" 
                                onClick={() => onCategoryFilter("Dark")} 
                                criteriaKey="category"
                            />
                            <FilterChips 
                                placeholder="Игра слов" 
                                criteriaValue="Pun" 
                                onClick={() => onCategoryFilter("Pun")} 
                                criteriaKey="category"
                            />
                            <FilterChips 
                                placeholder="Страшные" 
                                criteriaValue="Spooky" 
                                onClick={() => onCategoryFilter("Spooky")} 
                                criteriaKey="category"
                            />
                            <FilterChips 
                                placeholder="Рождественские" 
                                criteriaValue="Christmas" 
                                onClick={() => onCategoryFilter("Christmas")} 
                                criteriaKey="category"
                            />
                        </div>
                    </div>

                    {/* Черный список */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <p id="flags-label" className="font-medium">Черный список:</p>

                        <div className="flags-container flex flex-wrap gap-2">
                            <button className="px-2 border rounded-lg hover:bg-gray-100 text-sm ">NSFW</button>
                            <button className="px-2 border rounded-lg hover:bg-gray-100 text-sm ">Религиозные</button>
                            <button className="px-2 border rounded-lg hover:bg-gray-100 text-sm ">Политические</button>
                            <button className="px-2 border rounded-lg hover:bg-gray-100 text-sm ">Расистские</button>
                            <button className="px-2 border rounded-lg hover:bg-gray-100 text-sm ">Сексистские</button>
                            <button className="px-2 border rounded-lg hover:bg-gray-100 text-sm ">Эксплицитные</button>
                        </div>
                    </div>

                    {/* Выбор типа шутки */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <p className="font-medium">Выберите хотя бы один тип шутки:</p>

                        <FilterChips 
                            placeholder="Все" 
                            criteriaValue="any" 
                            onClick={() => onTypeFilter("any")} 
                            criteriaKey="type" 
                        />
                        <FilterChips 
                            placeholder="Одиночные" 
                            criteriaValue="single" 
                            onClick={() => onTypeFilter("single")} 
                            criteriaKey="type" 
                        />
                        <FilterChips 
                            placeholder="Двойные" 
                            criteriaValue="twopart" 
                            onClick={() => onTypeFilter("twopart")} 
                            criteriaKey="type" 
                        />
                    </div>

                    {/* Поле поиска */}
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <SearchIcon className="w-4 h-4 absolute top-2 left-2 text-black/60"/>

                            <input
                                type="text"
                                ref={searchRef}
                                placeholder="Поиск..."
                                className={clsx(
                                    "px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm pl-8", 
                                    { "border-blue-700 bg-blue-100 hover:!bg-blue-200": getCriteria("contains") }
                                )}
                                defaultValue={getCriteria("contains") || searchRef.current?.value}                                
                            />

                            {getCriteria("contains") && (
                                <button className="p-1 absolute top-1 right-1" onClick={clearInput}>
                                    <CloseIcon className="w-4 h-4 text-black/60"/>
                                </button>
                            )}
                        </div>

                        <button className="px-2 py-1 border rounded-xl hover:bg-gray-100 text-sm "
                                onClick={handleInputChange}>
                            Поиск
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}
