import getContent from '../src/actions/contents';

/* const getContent = require('../src/actions/contents');*/

/* 测试 bizTable 相关 actions */
describe('test actions', () => {

    /* 测试get data */
    test('should create an action for get data request', (contents) => {
        const expectedAction = {
            type: 'GET_CONTENT',
            contents
        };

        expect(getContent).toEqual(expectedAction);
    });

    test('get data 异步', () => {
        expect.assertions(1);
        return getContent
            .then(content => {
                expect(content.id).toBe(3);
            });
    })

    test('getContent能被调用', async () => {
        expect.assertions(1);
        let mockFn = jest.fn();
        await getContent(mockFn);

        // 断言mockFn被调用
        expect(mockFn).toBeCalled();
    })

    // /* 测试put data */
    // test('should create an action for successful result of get data', () => {
    //     const payload = {
    //         items: [{
    //                 id: 1,
    //                 code: '1'
    //             },
    //             {
    //                 id: 2,
    //                 code: '2'
    //             }
    //         ],
    //         total: 2
    //     };
    //     const expectedAction = {
    //         type: type.BIZ_TABLE_GET_RES_SUCCESS,
    //         payload
    //     };

    //     expect(actions.addContent(payload)).toEqual(expectedAction);
    // });

    // /* 测试edit table */
    // test('should create an action for update table params', () => {
    //     const payload = {
    //         paging: {
    //             current: 2,
    //             pageSize: 25
    //         }
    //     };
    //     const expectedAction = {
    //         type: type.BIZ_TABLE_PARAMS_UPDATE,
    //         payload
    //     };

    //     expect(actions.editContent(payload)).toEqual(expectedAction);
    // });

    // /* 测试remove table */
    // test('should create an action for update table params', () => {
    //     const payload = {
    //         paging: {
    //             current: 2,
    //             pageSize: 25
    //         }
    //     };
    //     const expectedAction = {
    //         type: type.BIZ_TABLE_PARAMS_UPDATE,
    //         payload
    //     };

    //     expect(actions.editContent(payload)).toEqual(expectedAction);
    // });

});

