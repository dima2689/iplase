import nodemailer from 'nodemailer';

export const sendEmail = async (subject, order, receiver) => {
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: true,
        auth: {
            user: process.env.MAIL_LOGIN,
            pass: process.env.MAIL_PASS,
        },
    });

    const info = await transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: receiver, // list of receivers
        subject, // Subject line
        text: ``, // plain text body
        html: convertOrderToHtml(order), // html body
    });

    return info;
};

export const convertOrderToHtml = (order) => {
    const customer = order.customer || {};
    const products = order.products || [];
    const { name, street, city, tel, email } = customer;

    const productsHtml = products.map((product) => {
        const { id, name, price, quantity, totalPrice } = product;
        return `
        <ul>
            <li>id: ${id}</li>
            <li>name: ${name}</li>
            <li>price: ${price}</li>
            <li>quantity: ${quantity}</li>
            <li>totalPrice: ${totalPrice}</li>
        </ul>
        `;
    });

    const htmlBody = `
    <h1>Заказ №${new Date().getTime()}</h1>
    <h2> Клиент: ${name} </h2>
    <ul>
        <li>Город: ${city}</li>
        <li>Улица: ${street}</li>
        <li>Тел: ${tel}</li>
        <li>Email: ${email}</li>
    </ul>
    <h2>Товары:</h2>
    ${productsHtml.join('')}
    `;

    return htmlBody;
};
