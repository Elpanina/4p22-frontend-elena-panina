const API_URL = 'https://reqres.in/api/users';

function doOutputLastNames(users) {
    if (!users) {
        return;
    }
    for (let user of users) {
        console.log(user.last_name)
    }
}

function doOtputFilteried(users) {
    console.log('-');
    users?.filter(item => item.last_name?.startsWith('F'))
        .forEach(user => {
            Object.entries(user)
                .forEach(([key, value]) => console.log(`${key}: ${value}`));
            console.log('-');
        });
}

function userReducer(accumulator = '', user, index = 0, allUsers = []) {
    return `${accumulator} ${user?.first_name} ${user?.last_name}${(index < allUsers.length - 1 ? ',' : '.')}`;
}

function doOutputUsersList(users) {
    let listTitle = 'Наша база содержит данные следующих пользователей:';
    const userListText = users.reduce(userReducer, listTitle);
    console.log(userListText);
}

function doOutputUsersObjectKeys(users) {
    const keys = new Set();
        users?.forEach(user => {
        Object.keys(user)
            .forEach(key => keys.add(key));
    });

    keys.forEach(key => console.log(key));
}

function doOutputUsersInfo(users) {
    const actions = [doOutputLastNames, doOtputFilteried, doOutputUsersList, doOutputUsersObjectKeys];

    actions.forEach((action, index) => {
        console.log('------------');
        console.log(`Пункт №${index + 2}:`);
        console.log('------------');
        action(users);
        console.log('');
    });
}

function processUsersFromCurrentAndNextPages(apiUrl, processFunction, pageNum = 0, users = [], usersJsonRs) {

    if (usersJsonRs) {
        users.push(...usersJsonRs.data);
        pageNum = usersJsonRs.page;
    }
        if (!usersJsonRs || usersJsonRs.page && usersJsonRs.total_pages && usersJsonRs.page < usersJsonRs.total_pages) {
        const newPageNum = pageNum + 1;
        fetch(apiUrl + '?page=' + newPageNum)      
            .then(response => response.json())     
            .then(jsonObj => processUsersFromCurrentAndNextPages(apiUrl, processFunction, newPageNum, users, jsonObj));
    } else {
        processFunction(users);
    }
}

processUsersFromCurrentAndNextPages(API_URL, doOutputUsersInfo);