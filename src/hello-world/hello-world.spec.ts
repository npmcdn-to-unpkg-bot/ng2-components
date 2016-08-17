import {it, describe, expect, beforeEach, inject} from '@angular/core/testing';
import {HelloWorld} from './hello-world';

describe('HelloWorld', () => {
    let helloWorld:HelloWorld;
    
    beforeEach(() => {
        helloWorld = new HelloWorld();
    });

    it('should have a message property', () => {
        expect(helloWorld.message).toBe('Click Me ...');
    });
    
    it('should say hello world', function() {
        helloWorld.onClick();
        expect(helloWorld.message).toBe('Hello World!');
    });    
});
