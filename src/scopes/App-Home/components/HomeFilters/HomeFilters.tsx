import useCriteria from '@/hooks/useCriteria'
import clsx from 'clsx'
import { useRef } from "react"

export const HomeFilters = () => {
    const { setCriteria, resetCriteria, getCriteria } = useCriteria()

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
        if (value === '') {
            resetCriteria('contains')
        } else {
            setCriteria('contains', value)
        }
    }

    const inputRef = useRef<HTMLInputElement | null>(null)
    
    const handleInputChange = () => {
        const value = inputRef.current?.value || ''
        onSearchFilter(value)
    }

    const clearInput = () => {
        if (inputRef.current) {
            inputRef.current.value = "" // Очищаем input напрямую
        }
    }

    return (
        <>
            <div className="border rounded-xl px-4 py-2 mt-6">
                <h1 className="text-3xl">Конфигуратор шутки</h1>

                <div>
                    <div className="">
                        <div className="flex my-6 gap-x-4 items-center">

                            <label id="category">Выберите категорию / категории:</label>

                            <div id="category" className='flex gap-x-4' >

                                <button value="Misc" className={clsx('px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm', {
                                    'border-blue-700 bg-blue-100 hover:bg-blue-200': getCriteria('category') === 'Any'
                                })}
                                onClick={() => onCategoryFilter ('Any')}>Без разницы</button>

                                <button value="Programming" className={clsx('px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm', {
                                    'border-blue-700 bg-blue-100 hover:bg-blue-200': getCriteria('category') === 'Programming'
                                })}
                                onClick={() => onCategoryFilter ('Programming')}>Программирование</button>

                                <button value="Misc" className={clsx('px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm', {
                                    'border-blue-700 bg-blue-100 hover:bg-blue-200': getCriteria('category') === 'Miscellaneous'
                                })}
                                onClick={() => onCategoryFilter ('Miscellaneous')}>Разное</button>

                                <button value="Dark" className={clsx('px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm', {
                                    'border-blue-700 bg-blue-100 hover:bg-blue-200': getCriteria('category') === 'Dark'
                                })}
                                onClick={() => onCategoryFilter ('Dark')}>Тёмный юмор</button>

                                <button value="Pun" className={clsx('px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm', {
                                    'border-blue-700 bg-blue-100 hover:bg-blue-200': getCriteria('category') === 'Pun'
                                })}
                                onClick={() => onCategoryFilter ('Pun')}>Игра слов</button>

                                <button value="Spooky" className={clsx('px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm', {
                                    'border-blue-700 bg-blue-100 hover:bg-blue-200': getCriteria('category') === 'Spooky'
                                })}
                                onClick={() => onCategoryFilter ('Spooky')}>Страшные</button>

                                <button value="Christmas" className={clsx('px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm', {
                                    'border-blue-700 bg-blue-100 hover:bg-blue-200': getCriteria('category') === 'Christmas'
                                })}
                                onClick={() => onCategoryFilter ('Christmas')}>Рождественские</button>

                            </div>

                        </div>

                        <div className="flex my-6 gap-x-4 items-center">
                            <label id="flags">Черный список:</label>

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

                            <button 
                                className={clsx('px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm', {
                                    'border-blue-700 bg-blue-100 hover:bg-blue-200': !getCriteria('type')
                                })}
                                onClick={() => onTypeFilter('')}>
                                Все
                            </button>

                            <button
                                className={clsx('px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm', {
                                    'border-blue-700 bg-blue-100 hover:bg-blue-200': getCriteria('type') === 'single'
                                })}
                                onClick={() => onTypeFilter('single')}
                            >
                                Одиночные
                            </button>

                            <button
                                onClick={() => onTypeFilter('twopart')}
                                className={clsx('px-2 py-1 border rounded-lg hover:bg-gray-50 text-sm', {
                                    'border-blue-700 bg-blue-100 hover:bg-blue-200': getCriteria('type') === 'twopart'
                                })}
                            >
                                Двойные
                            </button>

                            {/*<label><input className="" id="single"/>одиночная</label>*/}

                            {/*<label><input className="" id="twopart"/>двойная</label>*/}


                        </div>

                        <div className="flex items-center">

                            <label>Найдите шутку, которая содержит это слово:</label>

                            <input 
                                type="text"
                                ref={inputRef} // Привязываем input к useRef
                                //onChange={handleInputChange} // Вызываем функцию при изменении
                                className="px-2 py-1 border-2 rounded-lg hover:bg-gray-50 text-sm"/>

                            <button className='px-2 py-1 border  rounded-xl hover:bg-gray-50 text-sm'
                                onClick={handleInputChange}>Поиск
                            </button>

                            <button className='px-2 py-1 border  rounded-xl hover:bg-gray-50 text-sm'
                                onClick={() => {
                                    clearInput()
                                    handleInputChange()
                                }}>Очистить
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
