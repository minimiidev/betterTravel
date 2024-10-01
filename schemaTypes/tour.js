

export default {
    name: 'tours',
    title: 'Tours',
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
            name: 'country',
            title: 'Pais',
            type: 'reference',
            to: [{ type: 'country' }],
            description: 'Select the country where the destination is located'
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
        }
        , {
            name: "initialDate",
            title: "Fecha Inicial",
            type: "date",
            description: "Fecha de inicio"
        }
        , {
            name: "finalDate",
            title: "Fecha Final",
            type: "date",
            description: "Fecha de regreso"
        }
    ]
};
