export const responseStatus = ({ status, response }) => {
    expect(response.status).to.eq(status);
}

export const NaNull = (value) => {
    expect(value).to.not.be.oneOf([null, undefined, '']);
}