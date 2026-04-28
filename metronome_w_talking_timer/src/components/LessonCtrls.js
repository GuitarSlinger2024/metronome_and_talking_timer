import React, { useContext, useEffect } from 'react'
import { SettingsContext } from '../context/SettingsContext'
import Dropdown from './Dropdown'
import { lessons } from '../lessonData'

function LessonCtrls({ setReady, startLesson }) {
  const {
    section,
    setSection,
    part,
    setPart,
    lesson,
    setLesson,
    showSectionMenu,
    setShowSectionMenu,
    showPartMenu,
    setShowPartMenu,
    showLessonMenu,
    setShowLessonMenu,
  } = useContext(SettingsContext)

  useEffect(() => {
    setPart(null)
    setLesson(null)
    setShowPartMenu(false)
    setShowLessonMenu(false)
  }, [section])

  useEffect(() => {
    setLesson(null)
    setShowLessonMenu(false)
  }, [part])

  useEffect(() => {
    setReady(Boolean(lesson))
  }, [lesson])

  useEffect(() => {
    if (startLesson) {
      setShowLessonMenu(false)
      setShowPartMenu(false)
      setShowSectionMenu(false)
    }
  }, [startLesson])

  return (
    <section className="lessons">
      <Dropdown
        showList={showSectionMenu}
        setShowList={setShowSectionMenu}
        label="Section: "
        placeHolder="Choose A Section"
        options={['Sweep Picking', 'Picking Patterns']}
        currentOpt={section}
        setOption={setSection}
        disable={startLesson}
      />

      <Dropdown
        showList={showPartMenu}
        setShowList={setShowPartMenu}
        label="Part: "
        placeHolder="Choose A Part"
        options={['Alternate Picking', 'Economy Picking', 'Cross Picking']}
        currentOpt={part}
        setOption={setPart}
        disable={!section || section === 'Sweep Picking' || startLesson}
      />

      <Dropdown
        showList={showLessonMenu}
        setShowList={setShowLessonMenu}
        label="Lesson: "
        placeHolder="Choose A Lesson"
        options={
          part ? lessons['Picking Patterns'][part] : lessons['Sweep Picking']
        }
        currentOpt={lesson}
        setOption={setLesson}
        disable={(!part && section !== 'Sweep Picking') || startLesson}
      />
    </section>
  )
}

export default LessonCtrls
