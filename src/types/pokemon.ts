/**
 * Represents a Pokemon List response with a name and a URL.
 */
export interface Pokemon extends NameString {
  /**
   * The URL associated with the Pokemon.
   */
  url: string;
}

/**
 * Represents an object with a name property.
 */
export interface NameString {
  /**
   * The name of the entity.
   */
  name: string;
}

/**
 * Represents the response structure from the Pokemon API.
 */
export type PokemonAPIResponse = {
  /**
   * The total count of Pokemon available.
   */
  count: number;

  /**
   * The URL for the next page of results, or null if there are no more pages.
   */
  next: string | null;

  /**
   * The URL for the previous page of results, or null if there are no previous pages.
   */
  previous: string | null;

  /**
   * The list of Pokemon in the current page of results.
   */
  results: Pokemon[];
};

/**
 * Represents a list of Pokemon grouped by a numeric key.
 */
export interface PokemonList {
  /**
   * A mapping of numeric keys to arrays of Pokemon.
   */
  [key: number]: Pokemon[];
}

/**
 * Represents a Pokemon's stat, including its base value and the stat's name.
 */
export type Stats = {
  /**
   * The base value of the stat.
   */
  base_stat: number;

  /**
   * The name of the stat.
   */
  stat: NameString;
};

/**
 * Represents a Pokemon's ability.
 */
export type Ability = {
  /**
   * The name of the ability.
   */
  ability: NameString;
};

/**
 * Represents a Pokemon's type.
 */
export type Type = {
  /**
   * The name of the type.
   */
  type: NameString;
};

/**
 * Represents detailed information about a specific Pokemon.
 */
export type PokemonDetails = {
  /**
   * The unique identifier for the Pokemon.
   */
  id: number;

  /**
   * The name of the Pokemon.
   */
  name: string;

  /**
   * The list of abilities the Pokemon has.
   */
  abilities: Ability[];

  /**
   * The list of types the Pokemon belongs to.
   */
  types: Type[];

  /**
   * The height of the Pokemon in decimeters.
   */
  height: number;

  /**
   * The weight of the Pokemon in hectograms.
   */
  weight: number;

  /**
   * The base experience points the Pokemon yields when defeated.
   */
  base_experience: number;

  /**
   * The sprite images for the Pokemon.
   */
  sprites: {
    /**
     * The default front-facing sprite of the Pokemon.
     */
    front_default: string;

    /**
     * Additional sprite images for the Pokemon.
     */
    other: {
      /**
       * The home sprite image of the Pokemon.
       */
      home: {
        /**
         * The default front-facing sprite in the home category.
         */
        front_default: string;
      };
    };
  };

  /**
   * The list of stats for the Pokemon.
   */
  stats: Stats[];
};
