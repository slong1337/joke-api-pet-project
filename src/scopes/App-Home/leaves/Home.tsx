import { HomeFilters } from '@/scopes/App-Home/components/HomeFilters/HomeFilters'
import { JokeCard } from '@/scopes/App-Home/components/JokeCard/JokeCard'

export function Home() {
    return (
        <div className="mx-6 my-4">
            <div className="flex rounded-xl">
                <h1 className=" font-bold text-2xl max-w-2xl ">Добро пожаловать на наш сайт шуток!</h1>
            </div>
            <p className="text-red-500 font-medium max-w-2xl ">Здесь вы всегда найдете свежие, остроумные и забавные шутки на любой вкус.
                 Хотите поднять настроение? Просто введите запрос, и мы подберем для вас лучшие шутки!</p>
            <h2 className=" font-bold text-xl ">Как это работает?</h2>
            <p className="text-red-500 font-medium max-w-2xl ">Очень просто! Введите слово или фразу, и наш сайт подберет шутки, связанные с вашим запросом. Пример: «шутки о программистах»,
                 «шутки про жизнь» или «черный юмор» — мы найдем то, что вам нужно.</p>
            <h2 className=" font-bold text-xl ">Что вас ждет?</h2>
            <div >         
                <div className=" flex items-center ">
                    <h3 className=" font-semibold text-2xl ">Шутки по категориям -</h3>
                    <p className="font-normal text-xl">выбирайте, что вам ближе: от юмора о профессиях до мемов о животных.</p>
                </div>
                <div className=" flex items-center">
                    <h3 className=" font-semibold text-2xl ">Генератор случайных шуток - </h3>
                    <p className="font-normal">если не знаете, что выбрать, не переживайте, мы сами подберем вам что-то смешное!</p>
                </div>
                <div className=" flex items-center">
                    <h3 className=" font-semibold text-2xl ">Обратная связь -</h3>
                    <p className="font-normal">оцените шутки и делитесь любимыми с друзьями.</p>
                </div>

                <div className=" flex items-center">
                    <h3 className=" font-semibold text-2xl ">Регулярное обновление контента -</h3>
                    <p className="font-normal">Наши шутки всегда свежие и актуальные!</p>
                </div>
            </div>

            <p>
                Заглядывайте к нам, когда нужно поднять настроение, рассмешить друзей или просто поразвлечься. Смех продлевает жизнь — и мы с этим согласны!
            </p>

            <HomeFilters/>


        </div>
    )
}
