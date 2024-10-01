

export default {
    name: 'resort',
    title: 'Resort',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nombre',
            type: 'string'
        }, {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 200,
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'location',
            title: 'Ubicacion',
            type: "string",
        },
        {
            name: 'image',
            title: 'Imagen',
            type: 'image'
        },
        {
            name: 'description',
            title: 'Descripcion',
            type: 'text'
        },
        {
            name: 'price',
            title: 'Precio',
            type: 'number',
            description: 'Coste'
        },
        {
            name: 'currency',
            title: 'Moneda',
            type: 'string',
            options: {
                list: [
                    { title: 'DOP', value: 'DOP' },
                    { title: 'USD', value: 'USD' },
                    { title: 'EUR', value: 'EUR' },
                ],
            },
            validation: Rule => Rule.required(),
        }, {
            name: "checkIn",
            title: "Check In",
            type: "string",
            description: "Hora del Check In"
        }, {
            name: "checkOut",
            title: "Check Out",
            type: "string",
            description: "Hora del Check Out"
        }
    ]
};
