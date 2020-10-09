let uuid; // some id generator, ( uuid stands for "universally unique identifier" )

const doggie1 = {
    id: new uuid(),
    name: 'rocky',
    height: 50,
    weight: 20,
    owner: '',
    phone: '',
    favoriteToy: ''
};
const doggie2 = {
    id: new uuid(),
    name: 'tropy',
    height: 50,
    weight: 40,
    owner: 'Ted',
    phone: '',
    favoriteToy: ''
};
const doggie3 = {
    id: new uuid(),
    name: 'hoppy',
    height: 50,
    weight: 20,
    owner: 'Philip',
    phone: '0549411111',
    favoriteToy: ''
};

// Instated of creating all this instance hardcoded all around the place we can create a builder class

class DoggieBuilder {
    id = ''; // no need to make getter like java or c# there is no such thing as private property
    name = '';
    height = 0;
    weight = 0;
    phone = '';
    owner = '';
    favoriteToy = '';

    constructor(name) {
        this.name = name;
        this.id = new uuid();
    }

    setHeight(height) {
        this.height = height;
        return this;
    }

    setWeight(weight) {
        this.weight = weight;
        return this;
    }

    setPhone(phone) {
        this.phone = phone;
        return this;
    }

    setOwner(owner) {
        this.owner = owner;
        return this;
    }

    setFavioriteToy(favoriteToy) {
        this.favoriteToy = favoriteToy;
        return this;
    }

    build() {
        // by doing this we upcasting the builder to an object level (all the function will not be found inside the _proto_)
        return {...this};
    }

}

// now are code will look like that
const doggie1 = new DoggieBuilder('rocky')
    .setHeight(50)
    .setWeight(20)
    .build();
const doggie2 = new DoggieBuilder('tropy')
    .setHeight(50)
    .setWeight(40)
    .setOwner('Ted')
    .build();
const doggie3 = new DoggieBuilder('hoppy')
    .setHeight(50)
    .setWeight(20)
    .setOwner('Philip')
    .setPhone('054941111')
    .build();

