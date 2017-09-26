
const randByWeight = (a, b) => b.weight * Math.random() - a.weight * Math.random();

module.exports.avatarGenerate = function (male, layers, items) {
    let out = [];
    for (const layer of layers) {
        const layerItems = [];
        for (const item of items) {
            if (item.avatarlayerId === layer.id && (item.sex === male || item.sex === 2)) {
                layerItems.push(item);
            }
        }
        out.push(layerItems.sort(randByWeight)[0].num);
    }
    return out;
}