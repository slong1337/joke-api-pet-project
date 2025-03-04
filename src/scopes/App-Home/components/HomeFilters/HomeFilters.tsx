import useCriteria from '@/hooks/useCriteria'
import clsx from 'clsx'
import { useEffect, useRef } from "react"
import { CloseIcon } from '@/components/icons/CloseIcon'
import { FilterChips } from '@/scopes/App-Home/components/FilterChips/FilterChips'
import { SearchIcon } from '@/components/SearchIcon'
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
            <div className="border rounded-xl px-4 py-2 mt-6">
                <h1 className="text-3xl">Конфигуратор шутки</h1>

                <div>
                    <div className="">

                        <div className="flex my-6 gap-x-4 items-center">

                            <p id="category">Выберите категорию / категории:</p>

                            <div id="category" className='flex gap-x-4' >

                                <FilterChips 
                                    placeholder='Без разницы' 
                                    criteriaValue='Any' 
                                    onClick={() => onCategoryFilter('Any')} 
                                    criteriaKey='category'
                                />

                                <FilterChips 
                                    placeholder='Программирование' 
                                    criteriaValue='Programming' 
                                    onClick={() => onCategoryFilter('Programming')} 
                                    criteriaKey='category' 
                                />

                                <FilterChips 
                                    placeholder='Разное' 
                                    criteriaValue='Miscellaneous' 
                                    onClick={() => onCategoryFilter('Miscellaneous')} 
                                    criteriaKey='category' 
                                />

                                <FilterChips 
                                    placeholder='Тёмный юмор' 
                                    criteriaValue='Dark' 
                                    onClick={() => onCategoryFilter('Dark')} 
                                    criteriaKey='category' 
                                />

                                <FilterChips 
                                    placeholder='Игра слов' 
                                    criteriaValue='Pun' 
                                    onClick={() => onCategoryFilter('Pun')} 
                                    criteriaKey='category' 
                                />

                                <FilterChips 
                                    placeholder='Страшные' 
                                    criteriaValue='Spooky' 
                                    onClick={() => onCategoryFilter('Spooky')} 
                                    criteriaKey='category' 
                                />

                                <FilterChips 
                                    placeholder='Рождественские' 
                                    criteriaValue='Christmas' 
                                    onClick={() => onCategoryFilter('Christmas')} 
                                    criteriaKey='category' 
                                />

                            </div>

                        </div>

                        <div className="flex my-6 gap-x-4 items-center">
                            
                            <p id="flags">Черный список:</p>

                            <div id="flags" className="flex gap-x-4">

                                <button className="px-2  border rounded-lg hover:bg-gray-50 text-sm" id="nsfw"> NSFW</button>

                                <button className="px-2  border rounded-lg hover:bg-gray-50 text-sm" id="religious"> Религиозные</button>

                                <button className="px-2  border rounded-lg hover:bg-gray-50 text-sm" id="political"> Политические</button>

                                <button className="px-2  border rounded-lg hover:bg-gray-50 text-sm" id="racist"> Расистские</button>

                                <button className="px-2  border rounded-lg hover:bg-gray-50 text-sm" id="sexist"> Сексистские</button>

                                <button className="px-2 border rounded-lg hover:bg-gray-50 text-sm" id="explicit"> Эксплицитные</button>

                            </div>

                        </div>

                        <div className="flex my-6 gap-x-4 items-center">

                            <div>Выберите хотя бы один тип шутки:</div>

                            <FilterChips 
                                    placeholder='Все' 
                                    criteriaValue='type' 
                                    onClick={() => onTypeFilter('')} 
                                    criteriaKey='type' 
                            />

                            <button 
                                className={clsx('px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm', {
                                    'border-blue-700 bg-blue-100 hover:bg-blue-200': getCriteria('type') === 'any'
                                })}
                                onClick={() => onTypeFilter('any')}>
                                Все
                            </button>

                            <FilterChips 
                                    placeholder='Одиночные' 
                                    criteriaValue='single' 
                                    onClick={() => onTypeFilter('single')} 
                                    criteriaKey='type' 
                            />

                            <FilterChips 
                                    placeholder='Двойные' 
                                    criteriaValue='twopart' 
                                    onClick={() => onTypeFilter('twopart')} 
                                    criteriaKey='type' 
                            />

                        </div>

                        <div className="flex items-center gap-x-2">

                            <div className="relative">
                               
                                <SearchIcon className='w-4 h-4 absolute top-2 left-1 text-black/60'/>
                         
                                <input
                                    type="text"
                                    ref={searchRef}
                                    placeholder={'Поиск...'}
                                    className={clsx("px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm pl-6 ", {
                                        'border-blue-700 bg-blue-100 hover:!bg-blue-200' : getCriteria('contains')
                                    })}
                                    defaultValue={getCriteria('contains') || searchRef.current?.value}                                
                                />

                                {getCriteria('contains') && (
                                    <button className="p-1 absolute top-1 right-1" onClick={clearInput}>
                                        <CloseIcon className='w-4 h-4 text-black/60'/>
                                    </button>
                                )}

                            </div>

                            <button className="px-2 py-1 border  rounded-xl hover:bg-gray-50 text-sm"
                                    onClick={handleInputChange}>Поиск
                            </button>

                        </div>

                        {/*<div className="flex my-4">*/}

                        {/*    <label id="" className="mr-4">Поиск шутки в диапазоне:</label>*/}
                        {/*    <p>От</p>*/}
                        {/*    <input type="number" className=" border rounded-md mx-4 " min={1}/>*/}
                        {/*    <p>До</p>*/}
                        {/*    <input type="number" className=" border rounded-md mx-4 " max={1367}/>*/}

                        {/*</div>*/}

                        {/*<label id="">Количество шуток</label>*/}
                        {/*<input type="number" min={10} max={1367} className="mx-4 border rounded-md"/>*/}

                        

                    </div>

                </div>
            </div>


        </>
    )
}
