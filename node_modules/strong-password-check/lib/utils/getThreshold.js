const getThreshold = (config) => {
    const threshold = Object.values(config).filter((value) => value === true).length + 1 || 5;

    return threshold
}


module.exports = getThreshold;
