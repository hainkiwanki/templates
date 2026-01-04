import fs from 'node:fs';
import path from 'node:path';

export type Stats = {
    requests: number;
};

export class ApiStatsSerializer {
    private statsPath = path.resolve('./stats.json');
    private stats!: Stats;

    constructor() {
        this.readOrCreateFile();
    }

    private readOrCreateFile(): void {
        if (fs.existsSync(this.statsPath)) {
            this.stats = JSON.parse(fs.readFileSync(this.statsPath, 'utf-8'));
        } else {
            this.stats = { requests: 0 };
            this.save();
        }
    }

    private save(): void {
        fs.writeFileSync(this.statsPath, JSON.stringify(this.stats, null, 2));
    }

    public incrementRequests(): void {
        this.stats.requests++;
        this.save();
    }

    public getRequests(): number {
        return this.stats.requests;
    }
}
