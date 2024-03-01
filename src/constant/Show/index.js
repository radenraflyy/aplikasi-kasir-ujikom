import { Children } from "react"

export const Show = (props) => {
  let when = null
  let otherwise = null

  Children.forEach(props.children, (child) => {
    if (child.props.isTrue === undefined) {
      otherwise = child
    } else if (!when && child.props.isTrue === true) {
      when = child
    }
  })

  return when || otherwise
}

Show.When = ({ isTrue, children }) => isTrue && children
Show.Else = ({ render, children }) => render && children
