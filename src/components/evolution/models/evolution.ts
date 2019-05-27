export class Evolution {
    id: number;
    baby_trigger_item: any;
    chain: EvolutionChain;
}

export class EvolutionChain {
    evolution_details: any[];
    evolves_to: EvolutionChain[];
    is_baby: boolean;
    species: { name: string; url: string };
}

