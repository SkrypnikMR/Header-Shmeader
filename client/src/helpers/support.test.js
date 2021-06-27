import { support } from './support';

describe('support', () => {
    describe('setSessionStorageItem', () => {
        it('should be defined', () => {
            expect(support.setSessionStorageItem).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof support.setSessionStorageItem).toBe('function');
        });
        it('should call with string type arg', () => {
            support.setSessionStorageItem('kek', 'shrek');
            expect(sessionStorage.getItem('kek')).toBe('shrek');
        });
        it('should call with no string type arg', () => {
            support.setSessionStorageItem('kek', [{ kek: 'shrek' }]);
            expect(sessionStorage.getItem('kek')).toBe(JSON.stringify([{ kek: 'shrek' }]));
        });
    });
    describe('killSessionStorageItem', () => {
        it('should be defined', () => {
            expect(support.killSessionStorageItem).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof support.killSessionStorageItem).toBe('function');
        });
        it('should call and kill session storage item', () => {
            support.setSessionStorageItem('kek', 'kek');
            support.killSessionStorageItem('kek');
            expect(sessionStorage.getItem('kek')).toBe(null);
        });
    });
    describe('getSessionStorageItem', () => {
        it('should be defined', () => {
            expect(support.getSessionStorageItem).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof support.getSessionStorageItem).toBe('function');
        });
        it('should call and return string type arg', () => {
            support.setSessionStorageItem('kek', 'kek');
            expect(support.getSessionStorageItem('kek')).toBe('kek');
        });
        it('should call and reutn !string type arg', () => {
            support.setSessionStorageItem('kek', { kek: 1 });
            expect(support.getSessionStorageItem('kek')).toEqual({ kek: 1 });
        });
    });
    describe('getPrettyTime', () => {
        const realGD = global.Date;
        beforeEach(() => {
            global.Date = jest.fn().mockReturnValue({ toTimeString: jest.fn().mockReturnValue('00:58:34Z') });
        });
        afterEach(() => {
            global.Date = realGD;
        });
        it('should be defined', () => {
            expect(support.getPrettyTime).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof support.getPrettyTime).toBe('function');
        });
        it('should return pretty Time', () => {
            const time = '123454678';
            expect(support.getPrettyTime(time)).toBe('00:58:34');
        });
    });
    describe('getMessagesFolders', () => {
        it('should be defined', () => {
            expect(support.getMessagesFolders).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof support.getMessagesFolders).toBe('function');
        });
        it('should return expected Object', () => {
            const rooms = [{ room_id: 1, room_name: 'global' }];
            const expectedObj = { global: [] };
            expect(support.getMessagesFolders(rooms)).toEqual(expectedObj);
        });
    });
});
