interface Props {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props): JSX.Element => (
  <>
    {/*header*/}
    <main>{children}</main>
  </>
)

export default MainLayout
