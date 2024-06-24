import { useMemo, useRef, useState, useEffect } from "react"
import { useMouse } from "react-use"
import { useSpring } from "framer-motion"

function Group({ children, className, body, as: Component = "div", ...props }) {
  const tokens = useMemo(() => {
    return body.split("")
  }, [body])

  return (
    <Component className={className} {...props}>
      {children(tokens)}
    </Component>
  )
}

function Token({ min = 100, max = 900, threshold = 300, body, className, as: Component = "span", ...props }) {
  const container = useRef(null)

  const { elX, elY, elW, elH } = useMouse(container)

  const [ready, setReady] = useState(false)
  useEffect(() => setReady(true), [elX])

  const [previous, setPrevious] = useState(min)
  const [transitioning, setTransitioning] = useState(false)

  const fontWeight = useSpring(min, {
    duration: 100,
  })

  function animate(value) {
    setTransitioning(true)

    fontWeight.set(value)

    setTimeout(() => setTransitioning(false), 100)
  }

  useEffect(() => {
    let targetValue = min

    if (!ready || !container.current || elY < 0 || elY > elH) {
      targetValue = min
    } else {
      const lambda = Math.abs(elX - elW / 2)

      const value = (threshold - lambda) / threshold

      targetValue = Math.round(Math.min(Math.max(value * max, min), max))
    }

    if (previous == min && targetValue > min) {
      animate(targetValue)
    } else if (previous > min && targetValue == min) {
      animate(targetValue)
    } else if (!transitioning) {
      fontWeight.jump(targetValue)
    }

    setPrevious(targetValue)
  }, [elX, elY, elW, elH])

  return (
    <Component ref={container} className={className} style={{ fontWeight: fontWeight.get() }} {...props}>
      {body}
    </Component>
  )
}

export const MagneticText = Object.assign(Group, { Token })
