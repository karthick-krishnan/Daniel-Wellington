const expect = require("chai").expect;
const productsLambda = require("../index");

describe("DW Products Lambda", () => {
  it(`SUCESS: GET ALL PRODUCTS `, (done) => {
    productsLambda.handler({}, null, (result) => {
      try {
        expect(result).to.exist;
        expect(result.statusCode).to.deep.equal(200);
        expect(result.data).to.be.an("array");

        done();
      } catch (error) {
        done(error);
      }
    });
  }).timeout(15000);

  it(`SUCCESS: GET BY PRODUCT ID `, (done) => {
    productsLambda.handler({ productId: "DW00100001" }, null, (result) => {
      try {
        expect(result).to.exist;
        expect(result.statusCode).to.deep.equal(200);
        expect(result.data).to.be.an("array");

        done();
      } catch (error) {
        done(error);
      }
    });
  }).timeout(15000);

  it(`NO CONTENT: GET BY PRODUCT ID `, (done) => {
    productsLambda.handler({ productId: "AW00100011" }, null, (result) => {
      try {
        expect(result).to.exist;
        expect(result.statusCode).to.deep.equal(204);
        expect(result.data).to.be.an("array").that.is.empty;

        done();
      } catch (error) {
        done(error);
      }
    });
  }).timeout(15000);
});
