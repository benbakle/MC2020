import React, { useState } from 'react';
import './screen-slide.scss';

const ScreenSlide = props => {
    const { children, ariaLabel, className } = props;
    const [activeScreen, setActiveScreen] = useState(0);
    const [slideProps, setSlideProps] = useState();

    const updateProps = props => {
        setSlideProps({ ...slideProps, ...props })
        console.log(slideProps)
    }

    const back = props => {
        if (activeScreen === 0)
            return

        setActiveScreen(activeScreen - 1);
        updateProps(props)
    }

    const next = props => {
        if (activeScreen === children.length - 1)
            return;

        updateProps(props)
        setActiveScreen(activeScreen + 1);
    }

    const goTo = (index, props) => {
        updateProps(props)
        setActiveScreen(index);
    }

    const hasBeenViewed = screen => screen < activeScreen;
    const isActive = screen => screen === activeScreen;

    const slideClasses = screen => {
        let _classes = "screen";

        if (hasBeenViewed(screen))
            _classes = `${_classes} has-been-viewed`;

        if (isActive(screen))
            _classes = `${_classes} is-active`;

        return _classes;
    }

    const childSlides = children.length === 1 ? [children] : children;

    return (
        <div className={`screen-slide${className ? ` ${className}` : ""}`} role="region" aria-label={ariaLabel} >
            {
                childSlides.map((item, key) =>
                    <div key={key} className={slideClasses(key)}>
                        {
                            item && React.cloneElement(item,
                                {
                                    back: back,
                                    next: next,
                                    goTo: goTo,
                                    isActive: isActive(key),
                                    hasBeenViewed: hasBeenViewed(key),
                                    slideProps: slideProps,
                                })
                        }
                    </div>
                )
            }
        </div>
    );
}

export default ScreenSlide