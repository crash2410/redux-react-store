export default class RestoService {
    _apiBase = 'http://localhost:3000';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    }

    getMenuItems = async () => {
        const res = await this.getResource('/menu');
        return res.map(this._transformMenuItems);
    }

    _transformMenuItems = (menu) => {
        return {
            title: menu.title,
            price: menu.price,
            url: menu.url,
            category: menu.category,
            id: menu.id
        }
    }

}