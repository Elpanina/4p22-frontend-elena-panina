const cards_items = [
    { id: 1, title: 'Guerlain Mon Guerlain', price: 5180, description: 'Аромат для женщин, он принадлежит к группе восточные древесные.Mon Guerlain выпущен в 2017 году. Mon Guerlain был создан Thierry Wasser и Delphine Jelk. Верхние ноты: Лаванда и Бергамот; средние ноты: Ирис, Жасмин Самбак и Роза; базовые ноты: Ваниль, Кумарин, Австралийский сандал, Лакричник, Бензоин и Пачули.', img: 'https://user-images.githubusercontent.com/69847903/204974216-c459947a-3030-4512-acec-2402aa25e3b8.jpg', categories: ["Парфюмерия"]},
    { id: 2, title: 'Dior J\'adore', price: 7150, description: 'Аромат для женщин, он принадлежит к группе цветочные фруктовые.J\'adore выпущен в 1999 году. Парфюмер: Calice Becker. Верхние ноты: Груша, Дыня, Магнолия, Персик, Мандарин и Бергамот; средние ноты: Жасмин, Ландыш, Тубероза, Фрезия, Роза, Орхидея, Слива и Фиалка; базовые ноты: Мускус, Ваниль, Ежевика и Кедр. Этот аромат получил награду FiFi Award Best National Advertising Campaign / TV 2007', img: 'https://user-images.githubusercontent.com/69847903/204974167-a8864846-bff5-42e5-9c8d-319b2dd6370a.jpg', categories: ["Парфюмерия"]},
    { id: 3, title: 'Lacoste Pour Femme', price: 4200, description: 'Аромат для женщин, он принадлежит к группе цветочные древесно-мускусные.Lacoste Pour Femme выпущен в 2003 году. Парфюмер: Olivier Cresp. Верхние ноты: Перец, Фрезия и Яблоко; средние ноты: Гелиотроп, Фиалка, Жасмин, Гибискус и Роза; базовые ноты: Замша, Сандал, Ладан, Кедр и Лабданум.', img: 'https://user-images.githubusercontent.com/69847903/204974245-b1736c6a-e142-48d8-8782-fc9dbc14e56a.jpg', categories: ["Парфюмерия"]},
    { id: 4, title: 'Loreal telescopic', price: 850, description: 'Тушь для ресниц (удлинняющая) черная.Длинные и идеально разделённые ресницы с тушью для ресниц "Телескопик" от L’Oreal Paris! Инновационная гибкая пластиковая щёточка-расчёска нежно разделяет каждую ресничку, обеспечивая безупречный результат. Тушь для ресниц содержит питательные компоненты, которые увлажняют структуру ресниц.', img: 'https://user-images.githubusercontent.com/69847903/204974260-3ddd9afb-eca9-4a56-824e-f4ae2494b16b.jpg', categories: ["Косметика для глаз"]},
    { id: 5, title: 'Tom Ford Lost Cherry', price: 20200, description: 'Аромат для мужчин и женщин, он принадлежит к группе восточные цветочные.Lost Cherry выпущен в 2018 году. Парфюмер: Louise Turner. Верхние ноты: Горький миндаль, Ликер и Black Cherry; средние ноты: Вишня, Слива, Турецкая роза и Жасмин Самбак; базовые ноты: Бобы тонка, Ваниль, Перуанский бальзам, Корица, Бензоин, Сандал, Гвоздика (пряность), Кедр, Пачули и Ветивер.', img: 'https://user-images.githubusercontent.com/69847903/204974275-deae26e3-58f0-455c-a5da-51cbc5d4fcdc.jpg', categories: ["Парфюмерия"]},
    { id: 6, title: 'Tiziana Terenzi Kirke', price: 14400, description: 'Аромат для мужчин и женщин, он принадлежит к группе шипровые фруктовые.Kirke выпущен в 2015 году. Парфюмер: Paolo Terenzi. Верхние ноты: Маракуйя, Персик, Груша, Малина, Лист черной смородины и Песок; средняя нота: Ландыш; базовые ноты: Мускус, Ваниль, Сандал, Пачули и Гелиотроп.', img: 'https://user-images.githubusercontent.com/69847903/204974234-e8af67bd-2cf1-4f82-82e8-53895a4a4d52.jpg', categories: ["Парфюмерия"]},
    { id: 7, title: 'Fiesta Carioca Escada', price: 2900, description: 'Аромат для женщин, он принадлежит к группе цветочные фруктовые.Fiesta Carioca выпущен в 2017 году. Верхние ноты: Маракуйя, Малина и Лист фиалки; средние ноты: Страстоцвет, Жасмин и Цветок апельсина; базовые ноты: Мускус, Бензоин и Кедр.', img: 'https://user-images.githubusercontent.com/69847903/204974199-8db31384-a811-4f76-89a4-347ae8bd639f.jpg', categories: ["Парфюмерия"]},
    { id: 8, title: 'Gucci Premiere Gucci', price: 3000, description: 'Аромат для женщин, он принадлежит к группе цветочные древесно-мускусные.Gucci Premiere выпущен в 2012 году. Верхние ноты: Бергамот и Ежевика; средние ноты: Белые цветы, Мускус и Цветок апельсина; базовые ноты: Древесные ноты, Сандал и Пачули.', img: 'https://user-images.githubusercontent.com/69847903/204974208-d3f6367e-e578-4f15-bf31-bfe2dba45d5a.jpg', categories: ["Парфюмерия"]},
    { id: 9, title: 'Vivienne Sabo Cabaret premiere', price: 350, description: 'Тушь для ресниц ТОН 04 фиолетовая суперобъёмная.САМАЯ ЯРКАЯ ПРЕМЬЕРА VIVIENNE SABO. Незабываемая премьера сезона - тушь CABARET PREMIÈRE с эффектом сценического объема не только классического черного цвета, но и ярких ультрамодных оттенков: Violette, Blue, Marine, Brown. Уникальная пластиковая щеточка с зауженным кончиком позволяет равномерно распределить тушь по ресницам, разделяя их и придавая феноменальный объем! Щеточка сделана из материала, который не теряет форму в течение всего срока использования. Обновленная эластичная текстура туши равномерно обволакивает ресницы без единого комочка! А новая золотая упаковка станет элегантным аксессуаром, дополняющим ваш образ. Совет: При нанесении туши смотрите вниз, прижимайте кисточку ближе к корням ресниц и направляйте вверх. Это поможет создать эффект распахнутого взгляда!', img: 'https://user-images.githubusercontent.com/69847903/204974789-e6d7c297-11f8-4f2d-bea6-fd8990a611d2.jpg', categories: ["Косметика для глаз"]},
    { id: 10, title: 'Catrice daring nude', price: 1700, description: 'Палетка теней для век. Нюдовый макияж «без макияжа» или эффектный выразительный образ? Почему бы не выбрать оба варианта? Верная девизу «привлекает противоположности», палетка для век Daring Nude сочетает в себе как насыщенные и выразительные, так и нейтральные натуральные оттенки. 18 высокопигментированных, грамотно подобранных друг к другу оттенков идеально сочетаются между собой для создания идеального нюдового образа в вашем стиле!', img: 'https://user-images.githubusercontent.com/69847903/204974142-5d9c7c55-8d42-4d02-b344-591fc879705d.jpg', categories: ["Косметика для глаз"]},
    { id: 11, title: 'Luxvisage matt tatoo', price: 430, description: 'Подводка-фломастер для глаз водостойкая 24н тон черный. Благодаря формуле подводка-фломастер для глаз MATT TATTOO waterproof 24H smudgeproof устойчива к воде, поту и слезам. Не отпечатывается на веках. Ультратонкий мягкий аппликатор наносит подводку без пробелов, рисует равномерные насыщенные линии, позволяет идеально проработать межресничный контур. Коническая форма аппликатора дает возможность легко варьировать толщину линий — от изящных тонких до четких широких стрелок для вечернего макияжа.', img: 'https://user-images.githubusercontent.com/69847903/204974736-ec7de093-7137-4c9c-8c47-df625cc663de.jpg', categories: ["Косметика для глаз"]},
    { id: 12, title: 'Essence cool collagen my dream', price: 330, description: 'Помада для губ тон 201. В составе гиалуроновая кислота и растительный аналог коллагена. Средняя плотность покрытия, которую можно увеличить, нанося дополнительные слои. Веганский состав.', img: 'https://user-images.githubusercontent.com/69847903/204974179-3145051d-a0c9-4382-ae42-a66201375515.jpg', categories: ["Косметика для губ"]},
    { id: 13, title: 'Luxvisage dragon glass 3d volume lip gloss', price: 250, description: 'Блеск для губ, тон бесцветный.Зеркальный глянцевый блеск для губ DRAGON GLASS 3D volume визуально увеличивает объем губ, делает их более полными и увлажненными. Прозрачная густая гелевая текстура безупречно выравнивает поверхность губ, придает им идеальную гладкость, заполняет морщинки и трещинки. Легко наносится, не растекается за контур и стойко держится на губах в течение дня.', img: 'https://user-images.githubusercontent.com/69847903/204974280-4afc09be-1544-4b1e-b486-4c909bbf5c13.jpg', categories: ["Косметика для губ"]},
    { id: 14, title: 'Vivienne Sabo jolies levres', price: 240, description: 'Карандаш для губ тон 101i.Карандаши для губ JOLIES LEVRES благодаря насыщенному цвету очень легки в использовании. Вы одним касанием получаете идеальный контур или полный макияж губ, который будет держаться весь день. Легкая текстура предотвращает растекание губной помады и блеска. А широкая палитра оттенков позволит выбрать тот самый "свой" цвет!', img: 'https://user-images.githubusercontent.com/69847903/204974800-675cf628-74c0-495e-a8e9-f32643485fca.jpg', categories: ["Косметика для губ"]},
    { id: 15, title: 'Loreal volume million lashes feline noir', price: 770, description: 'Тушь для ресниц, объём и подкручивание, тон экстрачерный. Совершенно неукротимый объем и разделение для соблазнительного взгляда кошки. Уникальная изогнутая щеточка Объем Миллиона Ресниц создаст соблазнительный изгиб, а формула с черным пигментом сделает взгляд невероятно притягательным. Экстрачерная тушь станет подходящим средством для дневного или вечернего макияжа.', img: 'https://user-images.githubusercontent.com/69847903/204974264-ded27ddc-f06b-44a3-9fe2-f8a65c75f73f.jpg', categories: ["Косметика для глаз"]},
    { id: 16, title: 'Artdeco eyeshadow base', price: 570, description: 'База под тени для век. Придает стойкость макияжу глаз и делает цвет наносимых теней интенсивнее. Содержит комплекс витаминов, увлажняющих нежную кожу век.', img: 'https://user-images.githubusercontent.com/69847903/204974002-92ee033b-9cab-4fe2-ab36-2a1d1c104c42.jpg', categories: ["Косметика для глаз"]},
    { id: 17, title: 'Vivienne Sabo Aurora borealis', price: 720, description: 'Палетка теней для век тон 01. Палетка теней Aurora Borealis создана, чтобы вдохновлять на эксперименты! Неземные оттенки и сияющие переливы приковывают взгляды. Яркие сочетания тонов растопят даже самое холодное сердце, а широкая палитра – от холодных, как осколки льда, до мерцающих, как снежинки на солнце – поможет создать невероятный образ.', img: 'https://user-images.githubusercontent.com/69847903/204974777-5e26ce35-8b5f-4e2f-881c-aec3eedea300.jpg', categories: ["Косметика для глаз"]},
    { id: 18, title: 'Relouis kiss me again', price: 275, description: 'Гель-тинт для губ тон 02. Невероятную стойкость средства обеспечивают пигменты, которые надолго впитываются в поверхность кожи. Благодаря этому гель-тинт не размажется, выдержит перекус и не оставит следов на чашке. Гелевая формула не сушит кожу и абсолютно не ощущается на губах. Никакого блеска! Только яркий цвет и приятный сладкий вкус!', img: 'https://user-images.githubusercontent.com/69847903/204974760-b1cb1f53-6044-467e-8018-84a1c490062b.jpg', categories: ["Косметика для губ"]},
    { id: 19, title: 'Influence beauty volume dose', price: 575, description: 'Маска для губ. Маска VOLUME DOSE от INFLUENCE BEAUTY восстанавливает нежную кожу, заполняет неровности и возвращает губам красивую форму и четкий контур. Благодаря комплексу HYALURON PLUMP с гиалуроновой кислотой, пептидами и витаминами Е и А она делает губы гладкими, ровными и ухоженными, придавая им невероятный объем. Для видимого эффекта наносите маску VOLUME DOSE ежедневно утром, в течения дня и на ночь. Маску можно использовать как самостоятельное средство или как топпер поверх любой помады от INFLUENCE BEAUTY. В ассортименте 1 тон. Продукция не тестируется на животных.', img: 'https://user-images.githubusercontent.com/69847903/204974223-49da54cc-609d-4d10-8ba6-0cbc8e1a7b4e.jpg', categories: ["Косметика для губ"]},
    { id: 20, title: 'Etude dear darling water gel tint', price: 390, description: 'Тинт для губ тон 04. Сочный оттенок с влажным эффектом для красоты Ваших губ!', img: 'https://user-images.githubusercontent.com/69847903/204974191-271c0d20-427f-4f57-bafa-f251839e2c3c.jpg', categories: ["Косметика для губ"]},
    { id: 21, title: 'Catrice hemp & mint glow lip balm', price: 580, description: 'Бальзам для губ тон 010.Содержит масло семян конопли и ментол. Реагирует на уровень pH, приобретая уникальный розовый оттенок.', img: 'https://user-images.githubusercontent.com/69847903/204974156-5de49c95-71ac-4448-88ea-63f60be486bf.jpg', categories: ["Косметика для губ"]}
];

const stub = {
    cards: cards_items
};

console.log(JSON.stringify(stub))

const opapa = () => {};
export default opapa;