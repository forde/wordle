import fs from 'fs/promises'
import path from 'path'

const parse = async () => {
    const filePath = path.join(__dirname, 'pl5000.txt');
    const rawData = await fs.readFile(filePath, { encoding: 'utf-8' });
    const entries = rawData.split('\n');
    const ch5 = entries.filter(e => e.length === 5)
    const resultsJson = JSON.stringify(ch5, null, 2);
    await fs.writeFile('pl5000.json', resultsJson);
}

parse()
