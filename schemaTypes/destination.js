export default {
    name: 'destination',
    title: 'Destination',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'country',
            title: 'Country',
            type: 'reference',
            to: [{ type: 'country' }],
            description: 'Select the country where the destination is located'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Cost of the trip in USD'
        }
    ]
};
