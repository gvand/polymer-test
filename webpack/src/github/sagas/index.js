import search from './search';
import users from './users';
import repos from './repos';

export default function* sagas() {
    yield [
        ...search,
        ...users,
        ...repos
    ];
}