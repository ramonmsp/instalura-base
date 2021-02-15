import { css } from 'styled-components'
import { breakpointsMedia } from "./breakpointsMedia";

export const propToStyle = (propName) => {
  return function (props) {

    console.log('props[propName]', props[propName]);
    const propValue = props[propName];

    if (typeof propValue === 'string') {
      return {
        [propName]: props[propName]
      }
    }

    if (typeof propValue === 'object') {
      console.log('propName', propName)
      console.log('propValue', propValue)
      return breakpointsMedia({
        xs: {
          [propName]: propValue.xs,
        }
            
        ,
        sm: {
          [propName]: propValue.sm,
        }
            
        ,
        md: {
          [propName]: propValue.md,
        }
            
        ,
        lg: {
          [propName]: propValue.lg,
        }
            
        ,
        xl: {
          [propName]: propValue.xl,
        }
            
        ,

      })
    }
  }
}