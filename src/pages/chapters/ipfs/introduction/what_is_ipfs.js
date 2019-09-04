import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
    code: {
        backgroundColor: '#F2F3F4',
        fontSize: '0.875rem',
        fontFamily: "\"Roboto Mono\", \"monospace\"",
    },
    link: {
        color: "#0000EE"
    },
    note: {
        borderLeft: "6px solid #3f51b5",
        backgroundColor: "#ddffff"
    }
})

export default function What_is_ipfs() {
    const classes = useStyles();

    useEffect(() => {
        console.log("what is ipfs?")
        window.scrollTo(0, 0)
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid key={0} xs={12} item>
                <Typography variant="h4"><b>What is IPFS?</b></Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">Welcome! If you’re new to IPFS, you’ve come to the right place. Here is a quick overview of what IPFS is, how it works, and how to use it.</Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h5"><b>IPFS is a distributed system for storing and accessing files, websites, applications, and data.</b></Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">What does that mean, exactly? Let’s say you’re doing some research on aardvarks. (Just roll with it; aardvarks are cool! Did you know they can tunnel 3 feet in only 5 minutes?) You might start by visiting the Wikipedia page on aardvarks at:</Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography variant="body2" >https://en.wikipedia.org/wiki/Aardvark</Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">When you put that URL in your browser’s address bar, your computer asks one of Wikipedia’s computers, which might be somewhere on the other side of the country (or even the planet), for the aardvark page.</Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">However, that’s not the only option for getting the aardvark wiki page! There’s a mirror(copy) of Wikipedia stored on IPFS, and you could use that instead. If you use IPFS, your computer asks to get the aardvark page like this:</Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography variant="body2">https://ipfs.io/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/Aardvark.html</Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    IPFS knows how to find that sweet, sweet aardvark information by its contents, not its location (more on that, which is called content-addressing, below). The IPFS version of the aardvark info is represented by the alpha-numeric part in the middle of the URL (QmXoyp…), and instead of asking one of Wikipedia’s computers for the page, your computer uses IPFS to ask lots of computers around the world to share the page with you. It can get your aardvark info from anyone who has it, not just Wikipedia. We will see below how keeping data on different computers can be useful.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    When you use IPFS, you don’t just download files from someone else — your computer also helps distribute them. When your friend a few blocks away needs the same Wikipedia page, they might be as likely to get it from you as they would from your neighbor or anyone else using IPFS.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    IPFS makes this possible for not only web pages, but also any kind of file a computer might store, whether it’s a document, an email, or even a database record.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h5"><b>So why does that matter?</b></Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Making it possible to download a file from many locations that aren’t managed by one organization…
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <ul>
                    <li><Typography variant="body1"><b>Supports a resilient internet.</b> If someone attacks Wikipedia’s web servers or an engineer at Wikipedia makes a big mistake that causes their servers to catch fire, you can still get the same webpages from somewhere else.</Typography></li>
                    <br />
                    <li><Typography variant="body1"><b>Makes it harder to censor content.</b> Because files on IPFS can come from many places, it’s harder for anyone (whether they’re states, corporations, or someone else) to block things. In 2017, Turkey blocked Wikipedia and Spain blocked access to sites related to the Catalonian independence movement. We hope IPFS can help provide ways to circumvent actions like these when they happen.</Typography></li>
                    <br />
                    <li><Typography variant="body1"><b>Can speed up the web when you’re far away or disconnected.</b> If you can retrieve a file from someone nearby instead of hundreds or thousands of miles away, you can often get it faster. This is especially valuable if your community is networked locally, but doesn’t have a good connection to the wider internet. (Well-funded organizations with technical expertise do this today by using multiple data centers or CDNs — <a className={classes.link} href="https://en.wikipedia.org/wiki/Content_delivery_network" target="_blank">content distribution networks</a>. IPFS hopes to make this possible for everyone.)</Typography></li>
                </ul>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    That last point is actually where IPFS gets its name: Inter-Planetary File System. We’re striving to build a system that works across places as disconnected or as far apart as planets.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h5"><b>Links don’t change on IPFS.</b></Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">What about that link to the aardvark page above? It looked a little unusual:</Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography variant="body2">
                    /ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco/wiki/Aardvark.html
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    That jumble of letters (<span className={classes.code}>QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco</span>) is called a <NavLink className={classes.link} to="/ipfs/concepts/cid"> content identifier</NavLink>(CID) and it’s how IPFS names the files, folders and other content. Using the CID, IPFS is able to identify and get the content from multiple places.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Traditional URLs and file paths such as…
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Grid key={0} xs={12} item>
                    <ul>
                        <li><Typography variant="body2"><span className={classes.code}>https://en.wikipedia.org/wiki/Aardvark</span></Typography></li>
                        <br />
                        <li><Typography variant="body2"><span className={classes.code}>/Users/Alice/Documents/term_paper.doc</span></Typography></li>
                        <br />
                        <li><Typography variant="body2"><span className={classes.code}>C:\Users\Joe\My Documents\project_sprint_presentation.ppt</span></Typography></li>
                    </ul>
                </Grid>
            </Grid>


            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    …identify a file by where it’s located — what computer it’s on and where on that computer’s hard drive it is.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Instead of being location-based, IPFS addresses a file by what’s in it, or by its content. The content identifier above is a cryptographic hash of the content at that address. The hash is unique to the content that it came from, even though it may look short compared to the original content. It also allows you to verify that you got what you asked for — bad actors can’t just hand you content that doesn’t match. (If hashes are new to you, check out the <NavLink className={classes.link} to="/ipfs/concepts/hashes">concept guide on hashes</NavLink> for an introduction.)
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.note} item>
                <Typography variant="body1">
                    Why do we say “content” instead of “files” or “web pages” here? Because a content identifier can point to many different types of data, such as a single small file, a piece of a larger file, or metadata. (In case you don’t know, metadata is “data about the data.” You use metadata when you access the date, location, or file size of your digital pictures, for example.) So, an individual IPFS address can refer to the metadata of just a single piece of a file, a whole file, a directory, a whole website, or any other kind of content. For more on this, check out the <NavLink className={classes.link}>How IPFS Works</NavLink> part of these docs.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1"></Typography>
                Because the address of a file in IPFS is created from the content itself, links in IPFS can’t be changed. For example…
            </Grid>

            <Grid key={0} xs={12} item>
                <Grid key={0} xs={12} item>
                    <ul>
                        <li><Typography variant="body1">If the text on a web page is changed, the new version gets a new, different address.</Typography></li>
                        <br />
                        <li><Typography variant="body1">Content can’t be moved to a different address. On today’s internet, a company could reorganize content on their website and move a page at <span className={classes.code}>http://mycompany.com/what_we_do</span> to <span className={classes.code}>http://mycompany.com/services</span>. In IPFS, the old link you have would still point to the same old content.</Typography></li>
                    </ul>
                </Grid>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Of course, people want to update and change content all the time, and don’t want to send new links every time they do it. This is entirely possible in an IPFS world, but explaining it requires a little more info than what’s within the scope of this IPFS introduction. Check out the concept guides on <NavLink className={classes.link} to="/ipfs/concepts/ipns">IPNS</NavLink>, the <NavLink className={classes.link} to="/ipfs/concepts/mfs">Mutable File System (MFS)</NavLink>, and <NavLink className={classes.link} to="/ipfs/concepts/dnslink">DNSLink</NavLink> to learn more about how changing content can work in a content-addressed, distributed system.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    It’s important to remember in all of these situations, using IPFS is participatory and collaborative. If nobody using IPFS has the content identified by a given address available for others to access, you won’t be able to get it. On the other hand, content can’t be removed from IPFS as long as someone is interested enough to make it available, whether that person is the original author or not. Note that this is similar to the current web, where it is also impossible to remove content that’s been copied across an unknowable number websites; the difference with IPFS is that you are always able to find those copies.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h5">
                    <b>It’s all about possession and participation.</b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    While there’s lots of complex technology in IPFS, the fundamental ideas are about changing how networks of people and computers communicate. Today’s World Wide Web is structured on ownership and access, meaning that you get files from whoever owns them — if they choose to grant you access. IPFS is based on the ideas of possession and participation, where many people possess each others’ files and participate in making them available.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    That means IPFS only works well when people are actively participating. If you use your computer to share files using IPFS, but then you turn your computer off, other people won’t be able to get those files from you anymore. But if you or others make sure that copies of those files are stored on more than one computer that’s powered on and running IPFS, those files will be more reliably available to other IPFS users who want them. This happens to some extent automatically: by default, your computer shares a file with others for a limited time after you’ve downloaded it using IPFS. You can also make content available more permanently by pinning it, which saves it to your computer and makes it available on the IPFS network until you decide to unpin it. (You can learn more about this in the <NavLink className={classes.link} to="/ipfs/concepts/pinning">concept guide on pinning</NavLink>.)
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    If you want to make sure one of your own files is permanently shared on the internet today, you might use a for-pay file-sharing service like Dropbox. Some people have begun offering similar services based on IPFS called pinning services. But since IPFS makes this kind of sharing a built-in feature, you can also collaborate with friends or partner with institutions (for example, museums and libraries might work together) to share each others’ files. We hope IPFS can be the low-level tool that allows a rich fabric of communities, business, and cooperative organizations to all form a distributed web that is much more reliable, robust, and equitable than the one we have today.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h5">
                    <b>Next Steps</b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Sound interesting? You can continue to our more in-depth explanation of <NavLink className={classes.link} to="/ipfs/introduction/how_ipfs_works">how the IPFS ecosystem works</NavLink>. To dive right in and install IPFS, visit our <NavLink className={classes.link} to="/ipfs/introduction/getting_started">getting started guide</NavLink>.
                </Typography>
            </Grid>
        </Grid >
    )
}
