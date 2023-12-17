// ProfileStatus.test.js
import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
  test('status from props should be in the local state', () => {
    const component = create(<ProfileStatus status="My status" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('My status');
  });

  test('after creation, <span> should be displayed', () => {
    const component = create(<ProfileStatus status="My second status" />);
    const root = component.root;
    const span = root.findByType('span');
    expect(span).not.toBeNull();
  });

  test('after creation <span> should contains correct status', () => {
    const component = create(<ProfileStatus status="My another status" />);
    const root = component.root;
    const span = root.findByType('span');
    expect(span.children[0]).toBe('My another status');
  });

  test(`after creation, <input> shouldn't be displayed`, () => {
    const component = create(<ProfileStatus status="My fourth test" />);
    const root = component.root;
    expect(() => {
      const input = root.findByType('input');
    }).toThrow();
  });

  test('input should be displayed in editMode instead of span', () => {
    const component = create(<ProfileStatus status="My fifth test" />);
    const root = component.root;
    const span = root.findByType('span');
    span.props.onDoubleClick();
    const input = root.findByType('input');
    expect(input.props.value).toBe('My fifth test');
  });

  test('callback should be called', () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="My sixth test" updateStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
