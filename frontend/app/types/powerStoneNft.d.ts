export interface PowerStoneNft {
    attributes: PowerStoneAttributes[];
    description: string;
    image: string;
    name: string;
}

export interface PowerStoneAttributes {
    trait_type: string;
    value: string;
}
