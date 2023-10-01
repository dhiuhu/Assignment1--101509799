// test/GanacheBridgeTest.js
const GanacheBridge = artifacts.require("GanacheBridge");

contract("GanacheBridge", (accounts) => {
    let bridgeInstance;

    before(async () => {
        bridgeInstance = await GanacheBridge.deployed();
    });

    it("should have the correct initial owner", async () => {
        const owner = await bridgeInstance.owner();
        assert.equal(owner, accounts[0], "Initial owner is not the first account");
    });

    it("should allow the owner to transfer ownership", async () => {
        const newOwner = accounts[1];
        await bridgeInstance.transferOwnership(newOwner, { from: accounts[0] });
        const owner = await bridgeInstance.owner();
        assert.equal(owner, newOwner, "Ownership transfer failed");
    });

    it("should not allow non-owners to transfer ownership", async () => {
        const newOwner = accounts[2];
        try {
            await bridgeInstance.transferOwnership(newOwner, { from: accounts[1] });
            assert.fail("Ownership transfer should have failed");
        } catch (error) {
            assert.include(error.message, "Only the owner can transfer ownership");
        }
    });
});
