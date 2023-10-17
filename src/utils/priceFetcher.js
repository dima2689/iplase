const { URL_FETCH_PHONE_DATA } = process.env;

export const getPhoneDataById = async (id) => {
    const _id = String(id);
    if (_id.includes('iphone') || _id.includes('xiaomi')) {
        const url = `${URL_FETCH_PHONE_DATA}?id=${id}`;
        return (await fetch(url)).json();
    }
    return { success: false };
};

export const geAllPhones = async () => {
    const url = URL_FETCH_PHONE_DATA;
    return (await fetch(url)).json();
};
