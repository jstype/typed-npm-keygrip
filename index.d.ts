declare class Keygrip {
    constructor(keys: string[]);
    constructor(keys: string[], algorithm: string);
    constructor(keys: string[], algorithm: string, encoding: string);

    /**
     * message signing
     */
    sign(data: any): string;

    verify(data: any, digest: string): boolean;

    index(data: any, digest: string): number;
}

export = Keygrip;
